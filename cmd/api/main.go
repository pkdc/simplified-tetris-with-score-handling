package main

import (
	"encoding/json"
	"fmt"
	"html/template"
	"log"
	"net/http"
	"os"
)

type GameRecord struct {
	PlayerName string `json:"player_name"`
	GameScore  string `json:"game_score"`
	GameTime   string `json:"game_time"`
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
	tpl, err := template.ParseFiles("./assets/index.html")
	if err != nil {
		http.Error(w, "Parsing Error", http.StatusInternalServerError)
		return
	}
	err = tpl.ExecuteTemplate(w, "index.html", nil)
}

func recordHandler(w http.ResponseWriter, r *http.Request) {
	// fmt.Printf("-------method---------%s\n", r.Method)
	if r.Method != http.MethodPost && r.Method != http.MethodGet {
		http.Error(w, "Bad request", http.StatusBadRequest)
	}
	// Get to get
	if r.Method == http.MethodGet {
		fmt.Printf("----record-GET-----\n")
		// display records from db
	}
	// Post to store
	if r.Method == http.MethodPost {
		fmt.Printf("----record-POST-----\n")
		err := r.ParseForm()
		if err != nil {
			log.Fatal(err)
		}
		pname := r.PostForm.Get("pname")
		fmt.Printf("Name: %s\n", pname)
		score := r.PostForm.Get("score")
		fmt.Printf("Score: %s\n", score)
		time := r.PostForm.Get("time")
		fmt.Printf("Time: %s\n", time)

		curRecord := GameRecord{
			PlayerName: pname,
			GameScore:  score,
			GameTime:   time,
		}

		js, err := json.MarshalIndent(curRecord, "", " ")
		if err != nil {
			log.Fatal(err)
		}

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write(js)
		// if not exist
		err = os.WriteFile("record.json", js, 0644)
		if err != nil {
			log.Fatal(err)
		}
		// if exist
		f, err := os.OpenFile("record.json", os.O_RDWR|os.O_CREATE|os.O_APPEND, 644)
		if err != nil {
			log.Println(err)
		}
		defer f.Close()
		f.Write(js)

		// w.Header().Set("Location", "/")
		// w.WriteHeader(http.StatusSeeOther)
	}
}

func main() {
	mux := http.NewServeMux()
	mux.Handle("/assets/", http.StripPrefix("/assets", http.FileServer(http.Dir("./assets"))))
	mux.HandleFunc("/", homeHandler)
	mux.HandleFunc("/record", recordHandler)

	fmt.Println("Starting server at port 8080")

	err := http.ListenAndServe(":8080", mux)
	if err != nil {
		log.Fatal(err)
	}
}
