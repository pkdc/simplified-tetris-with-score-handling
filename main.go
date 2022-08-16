package main

import (
	"fmt"
	"log"
	"net/http"
	"text/template"
)

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
		// store it in db
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
