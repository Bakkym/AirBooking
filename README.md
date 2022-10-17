# AirBooking

### SQL DIAGRAM
![image](https://user-images.githubusercontent.com/92707871/196214722-3f65d8d0-3fa9-4cef-8016-5cf4ff3bd9c0.png)

### API ENDPOINTS
![image](https://user-images.githubusercontent.com/92707871/196240649-60520d83-f37c-48ba-9163-6c67d3241a26.png)

### API ENDPOINTS JSON

```json
{
  "item": [
    {
      "name": "Customers",
      "item": [
        {
          "name": "getCustomers",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "localhost:3001/customers",
              "host": ["localhost"],
              "port": "3001",
              "path": ["customers"]
            }
          },
          "response": []
        },
        {
          "name": "getCustomer",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "localhost:3001/customers/1027801014",
              "host": ["localhost"],
              "port": "3001",
              "path": ["customers", "1027801014"]
            }
          },
          "response": []
        },
        {
          "name": "deleteCustomer",
          "request": {
            "method": "DELETE",
            "header": [],
            "url": {
              "raw": "localhost:3001/customers/1001418478",
              "host": ["localhost"],
              "port": "3001",
              "path": ["customers", "1001418478"]
            }
          },
          "response": []
        },
        {
          "name": "createCustomer",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"profile_id\":\"101418477\",\r\n    \"customer_name\": \"Juan Camilo\",\r\n    \"address\": \"av #50\",\r\n    \"tel_no\": \"3202720288\",\r\n    \"email\": \"camilo@gmail.com\"\r\n\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "localhost:3001/customers",
              "host": ["localhost"],
              "port": "3001",
              "path": ["customers"]
            }
          },
          "response": []
        },
        {
          "name": "updateCostumer",
          "request": {
            "method": "PUT",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"customer_name\": \"Juan Camilo Barrientos Herrera\",\r\n    \"address\": \"av #50\",\r\n    \"tel_no\": \"3202720288\",\r\n    \"email\": \"camilo@gmail.com\"\r\n\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "localhost:3001/customers/101418477",
              "host": ["localhost"],
              "port": "3001",
              "path": ["customers", "101418477"]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "Tickets",
      "item": [
        {
          "name": "getTickets",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "localhost:3001/tickets",
              "host": ["localhost"],
              "port": "3001",
              "path": ["tickets"]
            }
          },
          "response": []
        },
        {
          "name": "getTicket",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "localhost:3001/tickets/9",
              "host": ["localhost"],
              "port": "3001",
              "path": ["tickets", "9"]
            }
          },
          "response": []
        },
        {
          "name": "createTicket",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"profile_id\": \"101418477\",\r\n    \"seat_id\": \"B6\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "localhost:3001/tickets",
              "host": ["localhost"],
              "port": "3001",
              "path": ["tickets"]
            }
          },
          "response": []
        },
        {
          "name": "deleteTicket",
          "request": {
            "method": "DELETE",
            "header": [],
            "url": {
              "raw": "localhost:3001/tickets/9",
              "host": ["localhost"],
              "port": "3001",
              "path": ["tickets", "9"]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "Seats",
      "item": [
        {
          "name": "getAllSeats",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "localhost:3001/seats",
              "host": ["localhost"],
              "port": "3001",
              "path": ["seats"]
            }
          },
          "response": []
        },
        {
          "name": "getAvailableSeats",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "localhost:3001/seats/available",
              "host": ["localhost"],
              "port": "3001",
              "path": ["seats", "available"]
            }
          },
          "response": []
        },
        {
          "name": "getSeat",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "localhost:3001/seats/B6",
              "host": ["localhost"],
              "port": "3001",
              "path": ["seats", "B6"]
            }
          },
          "response": []
        }
      ]
    }
  ]
}



```
