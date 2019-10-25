//change 5 to the total number of questions
var total=5
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

solution[1]="a"
solution[2]="d"
solution[3]="c"
solution[4]="c"
solution[5]="d"

