Name = "神崎絢人"
puts "Hello World"

text = "HelloWorld"
puts text 
puts 200 * 20

fruits = ["apple", "grape", "orange"] # 0:apple, 1:grape...の順に番号付けされ格納されている
puts fruits[0] #0番目の"apple"だけ出力する
puts fruits #fruitsの全ての要素を取り出して出力する
puts fruits[1]

fruits = {"a":"apple", "b":"grape", "c":"orange"} #key:valueをひとかたまりに格納する
puts fruits
puts fruits[:a] #キー値で取り出す

#if文

score = 75
 
if score > 90
  puts "めっちゃ凄い"
elsif score > 80
  puts "凄い"
elsif score > 60
  puts "良い感じ"
else
  puts "頑張れ"
end

list = [1, 2, 3, 4, 5]
for item in list #item = listの各要素
  puts item
end