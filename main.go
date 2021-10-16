package main

import (
	"sync"
)

func main() {
	wg := new(sync.WaitGroup)
	wg.Add(1)

	s := New_Server()

	go func() {
		s.Start()
		wg.Done()
	}()

	wg.Wait()
}