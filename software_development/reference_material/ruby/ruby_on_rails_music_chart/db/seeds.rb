random_description_array = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Obsecro, inquit,
   Torquate, haec dicit Epicurus? In quibus doctissimi illi veteres inesse
   quiddam caeleste et divinum putaverunt. Facile est hoc cernere in primis
   puerorum aetatulis. Verum tamen cum de rebus grandioribus dicas, ipsae res
  `verba rapiunt; Aliter enim nosmet ipsos nosse non possumus. Et non ex maxima
   parte de tota iudicabis?",
  "Haec dicuntur fortasse ieiunius; Tu autem, si tibi illa probabantur, cur
   non propriis verbis ea tenebas? Sed tamen intellego quid velit. Tu autem
   negas fortem esse quemquam posse, qui dolorem malum putet. Comprehensum,
   quod cognitum non habet? Quo plebiscito decreta a senatu est consuli
   quaestio Cn. Virtutis, magnitudinis animi, patientiae, fortitudinis
   fomentis dolor mitigari solet."
]

artist_1 = Artist.create(name: "Orc Grunt", description: "Can't touch this." + random_description_array.sample)
artist_2 = Artist.create(name: "Pipo the Clown", description: "I got banished from the circus." + random_description_array.sample)
artist_3 = Artist.create(name: "N.O.O.B.", description: "Music is a skill, not an art." + random_description_array.sample)
artist_4 = Artist.create(name: "Lady DaDa", description: "Regression can do nasty stuff to artists." + random_description_array.sample)
artist_5 = Artist.create(name: "The Jelly Family", description: random_description_array.sample)
artist_6 = Artist.create(name: "Spongebob", description: "Squeeze mee." + random_description_array.sample)
artist_7 = Artist.create(name: "Doctor Goat", description: "Baah baaaah baah."+ random_description_array.sample)
artist_8 = Artist.create(name: "A bipolar Gnome", description: "A Lannister always pays his debts." + random_description_array.sample)
artist_9 = Artist.create(name: "Der Kaiser", description: "Python, Python, Python, Python." + random_description_array.sample )
artist_10 = Artist.create(name: "RagnaRob", description: "BY FIRE BE PURGED!" + random_description_array.sample)

song_1 = Song.create(title: "Zug zug" , year: 1988, artist_id: artist_1.id)
song_2 = Song.create(title: "Three wolves and a cheeseburger" , year: 1988, artist_id: artist_2.id)
song_3 = Song.create(title: "Napdance" , year: 1988, artist_id: artist_3.id)
song_4 = Song.create(title: "Half-decent romance" , year: 1988, artist_id: artist_4.id)
song_5 = Song.create(title: "I fell in love with Chewbacca" , year: 1988, artist_id: artist_5.id)
song_6 = Song.create(title: "Squeeze me baby" , year: 1988, artist_id: artist_6.id)
song_7 = Song.create(title: "Baah!" , year: 1988, artist_id: artist_7.id)
song_8 = Song.create(title: "My father hates me" , year: 1988, artist_id: artist_8.id)
song_9 = Song.create(title: "Python Python Python Python!" , year: 1988, artist_id: artist_9.id)
song_10 = Song.create(title: "TASTE THE FLAMES OF SULFURAS" , year: 1988, artist_id: artist_10.id)
song_11 = Song.create(title: "I'm just cannon fodder", year: 1988, artist_id: artist_1.id)
song_12 = Song.create(title: "Stop calling me imp" , year: 1988, artist_id: artist_8.id)

# yes there are more efficient ways of doing this... But I'm pretty tired atm :P
chart_1 = Chart.create(
position1: "#{song_1.title} | #{song_1.artist.name}",
position2: "#{song_2.title} | #{song_2.artist.name}",
position3: "#{song_3.title} | #{song_3.artist.name}",

)
