package main

import (
	"encoding/json"
	"fmt"
	"strconv"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
)

// Mock Orders
type Order struct {
	ID    int    `json:"id"`
	Name  string `json:"name"`
	Order string `json:"order"`
	Date  string `json:"date"`
}

// Mock menu items
type Menu struct {
	ID    int     `json:"id"`
	Name  string  `json:"name"`
	Price float64 `json:"price"`
}

// Mock Cart Structure
type Cart struct {
	Items []Menu `json:"items"`
}

// Mock
var cart = Cart{
	Items: make([]Menu, 0),
}

// Hello API endpoint (Test)
func hello(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "Dis is cool",
	})
}

// Hello API endpoint (Test)
func add_to_cart(c *gin.Context) {
	// Add some mock items
	list := []Menu{{
		ID:    1,
		Name:  "Filet Mignon",
		Price: 14.99,
	}, {
		ID:    2,
		Name:  "Joy",
		Price: 21.99,
	}}

	item_id, err := strconv.Atoi(c.Param("item_id"))
	if err != nil {
		fmt.Println("Error:", err)
	}

	jsonData, _ := json.Marshal(cart)
	cart.Items = append(cart.Items, list[item_id])
	c.JSON(200, jsonData)
}

func main() {
	// Loading environment variables

	/* err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	myVar := os.Getenv("PS_INFO")
	fmt.Println("My variable:", myVar)

	conn, err := pgx.Connect(context.Background(), os.Getenv("PS_INFO"))
	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		os.Exit(1)
	}
	defer conn.Close(context.Background())
	*/

	r := gin.Default()
	r.Use(cors.Default())
	r.GET("/api/hello", hello)
	r.GET("/add_to_cart/:item_id", add_to_cart)
	r.Run(":8080")
}
