let fazzFood = (harga, voucher, jarak, pajak) => {

  const diskon1 = 'FAZZFOOD50'
  const diskon2 = 'DITRAKTIR60'
  let total = 0
  let ongkir = 5000
  let hargaPajak = 0
  let diskon = 0

  //Validasi penggunaan Voucher
  if(voucher && voucher !== diskon2 && voucher !== diskon1){
    return console.log('invalid voucher')
  }

  //menghitung biaya pajak
  if(pajak === true){
    hargaPajak = harga * 5 / 100
  }
  
  //validasi minimum pembelian & penghitungan harga setelah diskon
  if(voucher === diskon1 && harga < 50000 || voucher === diskon2 && harga < 25000){
    return console.log(`penggunaan voucher belum memenuhi minimum pembelian`)
  }else if(voucher === diskon1 && harga >= 50000){
    if(harga - harga/2 > 50000){
      diskon = 50000
    }else {
      diskon = harga/2
    }
  } else if(voucher === diskon2 && harga > 25000){
    if(harga - harga*6/10 > 30000){
      diskon = 30000
    } else {
      diskon = harga*6/10
    }
  }

  //penghitungan biaya Antar
  if (jarak > 2){
    ongkir = ongkir + ((jarak - 2) * 3000)
  }
  
  //menghitung sub total
  total = harga - diskon + hargaPajak + ongkir

//Output akhir
  return console.log(
`Harga: ${harga} 
Potongan: ${diskon}
Biaya antar: ${ongkir}
Pajak: ${hargaPajak}
SubTotal: ${total}`
)
}

fazzFood(75000, 'FAZZFOOD50', 5, true)
// fazzFood(60000, 'FAZZFOOD50', 3, false)
// fazzFood(60000, '', 3, true)
// fazzFood(60000, 'DISKON50', 3, true)



fazzFood = (harga, voucher, jarak, pajak) => {
  const diskon = [
    {
      kode: 'FAZZFOOD50',
      minPembelian: 50000,
      maxPotongan: 50000,
      potongan: 1/2
    },{
      kode: 'DITRAKTIR60',
      minPembelian: 25000,
      maxPotongan: 30000,
      potongan: 6/10
    }
  ]

  const kodePromo = diskon.map(item => item.kode).indexOf(voucher)
  let potonganHarga
  console.log(kodePromo)
  if(kodePromo && kodePromo == -1){
    return console.log('Invalid Voucher')
  }else if (kodePromo > -1){
    if(harga >= diskon[kodePromo].minPembelian){
        potonganHarga = harga * diskon[kodePromo].potongan
      if(potonganHarga > diskon[kodePromo].maxPotongan){
        potonganHarga = diskon[kodePromo].maxPotongan
      }
    }else {
      return console.log(`penggunaan voucher belum memenuhi minimum pembelian`)
    }
  }

  let hargaPajak = 0
  if(pajak === true){
    hargaPajak = harga * 5/100
  }

  let ongkir = 5000
  if(jarak > 2){
    ongkir = ongkir + ((jarak - 2) * 3000)
  }

  const total =  harga - potonganHarga + hargaPajak + ongkir

  return console.log(
    `Harga: ${harga} 
    Potongan: ${potonganHarga}
    Biaya antar: ${ongkir}
    Pajak: ${hargaPajak}
    SubTotal: ${total}`
    )
}

fazzFood(75000, 'FAZZFOOD50', 5, true)
