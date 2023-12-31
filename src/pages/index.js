import React, { useState } from "react";

// import FilterBar from "@/src/shared/components/Home/FilterBar";
import SearchBar from "@/src/shared/components/Home/SearchBar";
import Contant from "@/src/shared/components/Home/Contant";

export default function Home({questions}) {
  const [questionsData, setQuestionsData] = useState(questions)
  const [biosData, setBiosData] = useState({})
  const [activeTab, setActiveTab] = useState(1)

  return (
    <div className="home">
      {/* <FilterBar /> */}
      <div className='container'>
        <SearchBar setQuestionsData={setQuestionsData} setBiosData={setBiosData} activeTab={activeTab} />
        <Contant questions={questionsData} biosData={biosData} setBiosData={setBiosData} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const response = await fetch("https://bio-finder-app.vercel.app/api/home?size=15")
  const json = await response?.json()

  const obj = {}
  const arr = []

  json?.data?.questions.forEach((question) => {
    if (!obj[question?.categoryValue]) {
      obj[question?.categoryValue] = {
        q: question?.text,
        id: question?.categoryValue
      }
    }
  })

  json?.data?.ans.forEach((answer) => {
    const objj = {
      id: obj[answer._id]?.id,
      question: obj[answer._id]?.q,
      answers: answer.value
    }

    arr.push(objj)
  })

  return {
      props: {
          questions: arr
      }
  }
}