export function getUser(id, setUser){
    fetch("http://localhost:80/php-api-entrevista/getUser.php", {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: id})
    })
    .then( res => {
      return res.json()
    })
    .then( res => {
        setUser(res[0]);
      }
    )
}

export function updateUser(userNewData){
    fetch("http://localhost:80/php-api-entrevista/updateUser.php", {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(userNewData)
    })
}