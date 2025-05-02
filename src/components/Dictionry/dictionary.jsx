import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import Container from '@mui/material/Container';
import Header from '../Header/Header';
import Descriptions from '../Descriptions/Descriptions';

function Dictionary() {
const[word,setWords]=useState("")
const[meanings,setMeanings]=useState([])
const[category,setCategory]=useState("en")


    useEffect(() => {
      const DictionaryApi = async () => {
        try {
          const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
          setMeanings(data.data);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };
    
      if (word) {  
        DictionaryApi();
      }
    }, [word, category]);
    
    
  return (
    <div>
      <Container>
        <Header category={category} 
        setCategory={setCategory}
        word={word}
        setWords={setWords}
        />
        {meanings && ( < Descriptions word={word} meanings={meanings} category={category}/>)}
     
      </Container>
    </div>
  )
}

export default Dictionary
