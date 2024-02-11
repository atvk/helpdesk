import { useState, useEffect } from "react";

export default function useFetch (url: string | URL | Request){

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw Error('Something going wrong...');
        }
        return res.json();

      })
      .then(data => {
        setData(data)
        setLoading(false)
        setError(null)
      }
      )
      .catch(err => {
        setLoading(false)
        setError(err.message)
      })
  }, [])

  return{data, loading, error}

}