package main

import (
	"os"
	"sync"
)

func main() {
	wg := new(sync.WaitGroup)
	wg.Add(1)

	s := New_Server(os.Getenv("PORT"))

	go func() {
		s.Start()
		wg.Done()
	}()

	wg.Wait()
}