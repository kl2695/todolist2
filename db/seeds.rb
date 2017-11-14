# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

todo = Todo.new({title: "Todo1", body: "todo1", done: false})
todo2 = Todo.new({title: "Todo2", body: "todo2", done: false})
todo3 = Todo.new({title: "Todo3", body: "todo3", done: false})

todo.save
todo2.save
todo3.save
