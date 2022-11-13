import sqlite3

con = sqlite3.connect("employee.db")
print("Database opened successfully")

con.execute(
    "create table Employees2 (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, email TEXT UNIQUE NOT NULL, "
    "address TEXT NOT NULL, nickname TEXT NOT NULL, image TEXT NOT NULL)")

print("Table created successfully")

con.close()
