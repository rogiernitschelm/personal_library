# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

### LANGUAGES

ruby = Language.create(
name: "Ruby",
feature: "Readable, dynamic, and fun.",
description: "Ruby is a dynamic, reflective, object-oriented, general-purpose programming language.It was designed and developed in the mid-1990s by Yukihiro 'Matz' Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, including functional, object-oriented, and imperative.",
fonticon: "icon-ruby" )

javascript = Language.create(
name: "JavaScript",
feature: "The language of the web.",
description: "JavaScript is a high-level, dynamic, untyped and interpreted programming language. Alongside HTML and CSS, it is one of the three core technologies of World Wide Web content production; the majority of websites employ it and it is supported by all modern Web browsers without plug-ins. JavaScript is prototype-based with first-class functions, making it a multi-paradigm language, supporting object-oriented, imperative, and functional programming styles.",
fonticon: "icon-javascript" )

### TUTORIALS

tutorial1 = Tutorial.create(title: "tutorial rails", description: "Nice ruby framework", language_id: ruby.id)
tutorial2 = Tutorial.create(title: "tutorial reactjs", description: "Nice js framework", language_id: javascript.id)

### STEPS

step1 = Step.create(
step_number: 1,
description: "print hello world!",
code: "print hello world!",
tutorial_id: tutorial1.id)

step2 = Step.create(
step_number: 2,
description: "print hello world!",
code: "print hello world!",
tutorial_id: tutorial1.id)

puts "printed #{Language.count} languages, #{Tutorial.count} tutorials and #{Step.count} steps"
