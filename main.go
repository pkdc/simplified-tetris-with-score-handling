package main

import (
	"fmt"
	"log"
	"net/http"
	"text/template"
)

func homeHandler(w http.ResponseWriter, r *http.Request) {
	tpl, err := template.ParseFiles("./assets/dist/index.html")
	if err != nil {
		http.Error(w, "Parsing Error", http.StatusInternalServerError)
		return
	}
	err = tpl.ExecuteTemplate(w, "index.html", nil)
}

func main() {
	mux := http.NewServeMux()
	mux.Handle("/assets/dist/", http.StripPrefix("/assets/dist", http.FileServer(http.Dir("./assets/dist"))))
	mux.HandleFunc("/", homeHandler)

	fmt.Println("Starting server at port 8080")

	err := http.ListenAndServe(":8080", mux)
	if err != nil {
		log.Fatal(err)
	}
}
