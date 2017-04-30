# employers FAKE

employers = Employer.create! [

  {first_name: "Sjaak", last_name: "de Boer", email: "cheese@cheese.nl", password: "$2a$10$5eoHh6M2q4GjGkHClO.NqebWWhS94D8rNj5Ot6CB2qrbn7IrTfkSa", location: "Tiel", company_name: "cheeseFarm", business: "Banking", field: "Management"},
  {first_name: "Sjaak", last_name: "de Boer", email: "drugs@trucks.nl", password: "$2a$10$5eoHh6M2q4GjGkHClO.NqebWWhS94D8rNj5Ot6CB2qrbn7IrTfkSa", location: "Tiel", company_name: "drugsBytrucks", business: "Banking", field: "Management"},
  {first_name: "Sjaak", last_name: "de Boer", email: "info@pizzaflut.nl", password: "$2a$10$5eoHh6M2q4GjGkHClO.NqebWWhS94D8rNj5Ot6CB2qrbn7IrTfkSa", location: "Tiel", company_name: "Pizzaflut", business: "Banking", field: "Management"},
  {first_name: "Sjaak", last_name: "de Boer", email: "info@carshop.nl", password: "$2a$10$5eoHh6M2q4GjGkHClO.NqebWWhS94D8rNj5Ot6CB2qrbn7IrTfkSa", location: "Tiel", company_name: "Carshop", business: "Banking", field: "Management"},

  {first_name: "Sjaak", last_name: "de Boer", email: "bart@schmitt.nl", password: "$2a$10$5eoHh6M2q4GjGkHClO.NqebWWhS94D8rNj5Ot6CB2qrbn7IrTfkSa", location: "Tiel", company_name: "BartSchmitt", business: "Banking", field: "Management"},
  {first_name: "Sjaak", last_name: "de Boer", email: "dokter@dokter.nl", password: "$2a$10$5eoHh6M2q4GjGkHClO.NqebWWhS94D8rNj5Ot6CB2qrbn7IrTfkSa", location: "Tiel", company_name: "doktersAtdokter", business: "Banking", field: "Management"},
  {first_name: "Sjaak", last_name: "de Boer", email: "mister@ed.edu", password: "$2a$10$5eoHh6M2q4GjGkHClO.NqebWWhS94D8rNj5Ot6CB2qrbn7IrTfkSa", location: "Tiel", company_name: "misterEd", business: "Banking", field: "Management"},
  {first_name: "Sjaak", last_name: "de Boer", email: "kabouter@dorp.nl", password: "$2a$10$5eoHh6M2q4GjGkHClO.NqebWWhS94D8rNj5Ot6CB2qrbn7IrTfkSa", location: "Tiel", company_name: "kabouterDorp", business: "Banking", field: "Management"},
  {first_name: "Sjaak", last_name: "de Boer", email: "weetikveel@weetikt.nl", password: "$2a$10$5eoHh6M2q4GjGkHClO.NqebWWhS94D8rNj5Ot6CB2qrbn7IrTfkSa", company_name: "weetikt", business: "Banking", field: "Management"}

]

freelancers = Freelancer.create! [

  {email: "sjaak@mail.com", password: "blabla1234!", first_name: "Sjaak", last_name: "de Boer", gender: "female",  business: "Banking", field: "Accountancy", availability: "Available"},
  {email: "piet@mail.com", password: "blabla1234!", first_name: "Piet", last_name: "Pieters", gender: "female",  business: "Retail", field: "Marketing", availability: "Available"},
  {email: "sjors@mail.com", password: "blabla1234!", first_name: "Sjors", last_name: "Jacobs", gender: "female",  business: "Legal", field: "Lawyer", availability: "Available"},
  {email: "kees@mail.com", password: "blabla1234!", first_name: "Kees", last_name: "Monster", gender: "female", business: "Business", field: "Management", availability: "Available"},

  {email: "marie@mail.com", password: "blabla1234!", first_name: "Marie", last_name: "de Draaier", gender: "female", business: "Business", field: "Management", availability: "Available"},
  {email: "linda@mail.com", password: "blabla1234!", first_name: "Linda", last_name: "Smit", gender: "female", business: "Retail", field: "Cooking", availability: "Available"},
  {email: "anne@mail.com", password: "blabla1234!", first_name: "Anne", last_name: "Jansma", gender: "female", business: "Industry", field: "Engineering", availability: "Available"},
  {email: "sofie@mail.com", password: "blabla1234!", first_name: "Sofie", last_name: "de Boer", gender: "female", business: "IT", field: "Software development", availability: "Unavailable"},

  {email: "alibaba@mail.com", password: "blabla1234!", first_name: "Baba", last_name: "de Henk", gender: "female", business: "Banking", field: "Management", availability: "Available"},
  {email: "pio@mail.com", password: "blabla1234!", first_name: "Pipo", last_name: "de Boer", gender: "female", business: "IT", field: "Hardware", availability: "Available"},
  {email: "oomhenk@mail.com", password: "blabla1234!", first_name: "Henk", last_name: "de Boer", gender: "female", business: "Business", field: "Management", availability: "Available"},
  {email: "flierefluit@mail.com", password: "blabla1234!", first_name: "Flierefluit", last_name: "de Boer", gender: "female", business: "Business", field: "Management", availability: "Available"}

]

puts "Amount of Employer-seeds #{Employer.count}."
puts "Amount of Freelancer-seeds #{Freelancer.count}."
