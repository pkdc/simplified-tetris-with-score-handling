package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"html/template"
	"io/fs"
	"log"
	"net/http"
	"os"
)

var id int

type GameRecord struct {
	Id         int    `json:"id"`
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
		// respond with json
		// w.Header().Set("Content-Type", "application/json")
		// w.WriteHeader(http.StatusOK)
		// w.Write(js)

	}
	// Post to store
	if r.Method == http.MethodPost {
		fmt.Printf("----record-POST-----\n")
		err := r.ParseForm()
		if err != nil {
			log.Fatal(err)
		}

		fmt.Printf("Id: %d\n", id)
		pname := r.PostForm.Get("pname")
		fmt.Printf("Name: %s\n", pname)
		score := r.PostForm.Get("score")
		fmt.Printf("Score: %s\n", score)
		time := r.PostForm.Get("time")
		fmt.Printf("Time: %s\n", time)

		// try to open
		f, err := os.OpenFile("record.json", os.O_WRONLY|os.O_APPEND, 644)
		// if file not exist
		if errors.Is(err, fs.ErrNotExist) {

			// first record
			curRecord := GameRecord{
				Id:         1,
				PlayerName: pname,
				GameScore:  score,
				GameTime:   time,
			}

			var Records []GameRecord
			Records = append(Records, curRecord)

			js, err := json.MarshalIndent(Records, "", "\t")
			if err != nil {
				log.Fatal(err)
			}

			err = os.WriteFile("record.json", js, 0644)
			if err != nil {
				log.Fatal(err)
			}
		}
		defer f.Close()
		// if file exist
		var Records []GameRecord
		// get the records from record.json

		// put each record into Records array

		// get the length and find the last record's id

		// id is the last id + 1
		curRecord := GameRecord{
			Id:         5,
			PlayerName: pname,
			GameScore:  score,
			GameTime:   time,
		}

		Records = append(Records, curRecord)

		js, err := json.MarshalIndent(Records, "", "\t")
		if err != nil {
			log.Fatal(err)
		}

		f.Write(js)
		// f.Write([]byte('\n'))

		w.Header().Set("Location", "/")
		w.WriteHeader(http.StatusSeeOther)
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
