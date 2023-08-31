let id = null
const makeVariable =(id)=>{
    eval(`const ${id} = document.queryselector("#${id}")`)
}
const input = (id, type='text',label='',Placeholder='')=>{
    return `
    <label>${label}</label><br>
    <input type="${type}" id="${id}" placeholder="${Placeholder}"><br>
    `
    makeVariable(id)
}
const button =(id,label)=>{
    return`<button id="${id}">${label}</button>`
    makeVariable(id)
}
const div =(id)=>{
return `<div id="${id}"></div>`
makeVariable(id)
}
const editdata =(index)=>{
    namabarang.value = data[index].nama
    hargabarang.value = data[index].harga
    id = index
}
const deleteData =(index)=>{
    data.splice(index, 1)
    loadData(data,dataList)
}
const loadData =(data, element)=>{
element.innerHTML =''
let i = 0
data.forEach(item => {
    element.innerHTML +=`
    <p>
        Nama Barang :${item.nama}<br>
        Harga Barang :${item.harga}<button onclick="editdata(${i})">edit</button>
        <button onclick="deleteData(${i})">hapus</button>
    </p> 
    `
    i++
  });
}
const clear = ()=>{
    namabarang.value = null
    hargabarang.value = null
    id = null
}
let data =[
    {
        'nama':'tas',
        'harga':70000
    },
    {
        'nama':'sepatu',
        'harga':50000
    }
]

document.body.innerHTML += input  ('namabarang','text','Nama Barang','Masukan Nama Barang')
document.body.innerHTML += input  ('hargabarang','number','Harga Barang','Masukan Harga Barang')
document.body.innerHTML += button ('btnsimpan','simpan')
document.body.innerHTML += button ('btnclear','clear')
document.body.innerHTML += div('dataList')
loadData(data, dataList)
btnclear.addEventListener('click', ()=>{
clear()
})
btnsimpan.addEventListener('click', ()=>{
if(id  == null){
    data.push({
        'nama': namabarang.value,
        'harga': hargabarang.value
    })
    clear()
}else{
    data[id].nama = namabarang.value
    data[id].harga = hargabarang.value
}
loadData(data,dataList)
})