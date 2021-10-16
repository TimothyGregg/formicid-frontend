package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

type Server struct {
	http.Server
}


func New_Server() (*Server) {
	s := &Server{}

	// build router
	router := mux.NewRouter().StrictSlash(true)
	router.PathPrefix("/").Handler(http.FileServer(http.Dir("./frontend/")))
	s.Handler = router

	return s
}

func (s *Server) Start() {
	log.Fatal(s.ListenAndServe())
}