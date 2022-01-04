
const aux = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve([{id: "1234", name: "Tomas"}])},3000)
    })
    aux.then((res)=>{
      console.log(res)
      return "HOLA AGUSTINA SOY SCAINET Y ESTAS A PUNTO DE MORIR"
    }).then((res)=>{
      console.log(res)
    return"NO ES MENTIRA VAS A MORIR"
}).then((res)=>{
  console.log(res)
  return "ADIOS AGUSTINA JAJA"
}).then((res)=>{
    console.log(res)
})
  