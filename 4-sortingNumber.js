let devideAndSort = (int) =>{
  let devide = []
  let temp = ''

  //mengubah int menjadi string
  temp += int
  let temp2 = []

  //memecah temp menjadi individual array
  for(let i = 0; i < temp.length; i++){
    if(temp[i] != 0){
      temp2 = [...temp2, temp[i]]
    } 
  //temp[i] adalah angka 0 || i adalah index terakhir
  //urutkan temp2 lalu masukkan ke devide  
    if(temp[i] == 0 || i == temp.length -1){
      temp2.sort()
      devide = [...devide, ...temp2]
      temp2 = []
    }
  }
  
  //menggabungkan value array menjadi string
  let hasil = ''
  for(let i= 0; i < devide.length; i++){
    hasil += devide[i]
  }

  //mengubah hasil dari string menjadi integer
  hasil = +hasil
  return console.log(hasil)
}

devideAndSort(5956560159466056)

devideAndSort = (int) =>{
  const toStr = int.toString().split('0')

  let temp = ''
  let hasil = []
  for(let i = 0; i < toStr.length; i++){
    temp += toStr[i]
    hasil = [...hasil, ...temp.split('').sort()]
    temp = ''
  }
  hasil = hasil.join('')
  hasil = +hasil
  console.log(hasil)
}

devideAndSort(5956560159466056)

