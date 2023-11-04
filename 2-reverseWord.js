let reverseWord = (kalimat) => {
  let hasil = ''
  let arr = []

  //validasi input
  if(typeof kalimat === 'string'){
    //mengiterasi kalimat
    for(i = 0; i < kalimat.length; i++){
      if(kalimat[i] != ' ') {
      hasil += kalimat[i]
      }
      //memecah kalimat menjadi array sekaligus mengurutkan dari index terakhir
      if(kalimat[i] === ' ' || i == kalimat.length -1){
        arr = [hasil, ...arr]
        hasil = ''
      }
    }
    //mengambil data array mejadi sebuah string
    for(i = 0; i < arr.length; i++){
      hasil += arr[i]
      //menyatukan kata menjadi kalimat yang dipisahkan spasi
      if(arr[i] != arr.length -1){
        hasil += ' '
      }
    }
    return console.log(hasil)
  } else {
    return console.log('please enter a valid sentence')
  }
  
}

reverseWord('saya belajar javascript')

reverseWord = (kalimat) => {
  if(typeof kalimat === 'string'){
    const kata = kalimat.split(' ')
    const reverse = kata.reverse()
    const hasil = reverse.join(' ')
    return console.log(hasil)
  } else {
    return console.log('please enter a valid sentence')
  }
  
}

reverseWord('saya belajar javascript')