package main

import (
	"log"
	"net/http"
	"os"

	"github.com/TimothyGregg/formicid/web/util"
	"github.com/gorilla/mux"
)

type Server struct {
	http.Server
}

func New_Server() *Server {
	s := &Server{}

	// build router
	router := mux.NewRouter().StrictSlash(true)
	router.PathPrefix("/").Handler(http.FileServer(http.Dir("./")))
	router.Use(util.LogToStderr)
	s.Handler = router

	port := os.Getenv("PORT")
	s.Addr = ":" + port

	// debug
	// fmt.Println(s.Addr)

	return s
}

func (s *Server) Start() {
	log.Fatal(s.ListenAndServe())
}
