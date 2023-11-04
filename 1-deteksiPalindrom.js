let deteksiPalindrom = (text) => {
  let hasil = ''
  if(typeof text === 'string'){
    for(let x = text.length -1; x >= 0; x--){
      hasil += text[x]
    }
    
    if(hasil == text){
      return console.log(text, 'adalah kata palindrom')
    }else{
      return console.log(text, 'bukan kata palindrom')
    }
  } else {
    return console.log('please enter a valid word')
  }
  }

deteksiPalindrom('malam')
deteksiPalindrom('senin')
deteksiPalindrom(1)

deteksiPalindrom = (text) => {
  if(typeof text === 'string'){
    const arr = text.split('')
    const reverse = arr.reverse()
    const hasil = reverse.join('')
  
  if(hasil === text){
    return console.log(text, 'adalah kata palindrom')
  }else{
    return console.log(text, 'bukan kata palindrom')
    }
  } else {
    return console.log('please enter a valid word')
  }
}


deteksiPalindrom('tamat')
deteksiPalindrom('akhir')
deteksiPalindrom(2)

