//change 5 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Excellent! ¡Exelente!"
compliments[1]="Very good! ¡Muy bien! "
compliments[2]="Good job! ¡Buenísimo!"
compliments[3]="Right on!! ¡¡Pura Vida!!"
compliments[4]=""



/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="What percent of the world's animal species exist in Costa Rica?"
choice1[1]="4%"
choice1[2]="0.1%"
choice1[3]="0.025%"
choice1[4]="1%"

question[2]="Which of the following big cats is not native to Costa Rica?"
choice2[1]="Jaguars"
choice2[2]="Ocelots"
choice2[3]="Margays"
choice2[4]="Tigers"

question[3]="The Monteverde cloud forest contains the most species of which flora in a single space in the world?"
choice3[1]="Lichen"
choice3[2]="Moss"
choice3[3]="Orchids"
choice3[4]="Ferns"

question[4]="Which of the following birds are not native to Costa Rica?"
choice4[1]="Quetzals"
choice4[2]="Scarlet Macaws"
choice4[3]="Flamingos"
choice4[4]="Toucans"

question[5]="How many species of flowering plants does Costa Rica have?"
choice5[1]="10,000"
choice5[2]="550"
choice5[3]="2000"
choice5[4]="9000"

question[6]="Which beach city in Costa Rica is famous for being the nesting ground of leatherback turtles?"
choice5[1]="Junquillal"
choice5[2]="Puntarenas"
choice5[3]="Quepos"
choice5[4]="Tamarindo"

question[7]="Which species of monkey can not be found in Costa Rica?"
choice5[1]="Rock macaques"
choice5[2]="White headed capuchins"
choice5[3]="Howler monkeys"
choice5[4]="Spider monkeys"

question[8]="Tapirs eat all of the following except..."
choice5[1]="Fruit"
choice5[2]="Twigs"
choice5[3]="Ants"
choice5[4]="Leaves"

question[9]="Peccaries, the small, wild pigs found in Costa Rica live in heards of how many other peccaries?"
choice5[1]="1-2"
choice5[2]="3-30"
choice5[3]="40-50"
choice5[4]="None. They are solitary."

question[10]="The name of the national flower and orchid of Costa Rica, the Guaria Morada, means what in English?"
choice5[1]="Purple Orchid"
choice5[2]="Purple Country Girl"
choice5[3]="Purple Flower"
choice5[4]="Purple Guards"

solution[1]="a"
solution[2]="d"
solution[3]="c"
solution[4]="c"
solution[5]="d"
solution[6]="d"
solution[7]="a"
solution[8]="c"
solution[9]="b"
solution[10]="b"
