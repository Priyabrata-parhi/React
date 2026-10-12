import React from 'react'
import Card from './components/Card'

const App = () => {

  const users = [
    {
      fullName: "Arjun Mehra",
      title: "Frontend Developer",
      profile: "https://i.pravatar.cc/300?img=12",
      coverImage: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=80",
      likecount: 2450,
      postcount: 86,
      viewscount: 18500,
      followed: true
    },

    {
      fullName: "Aarav Sharma",
      title: "Software Engineer",
      profile: "https://i.pravatar.cc/300?img=3",
      coverImage: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=80",
      likecount: 3210,
      postcount: 124,
      viewscount: 25300,
      followed: false
    },

    {
      fullName: "Riya Kapoor",
      title: "UI/UX Designer",
      profile: "https://i.pravatar.cc/300?img=47",
      coverImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
      likecount: 4560,
      postcount: 98,
      viewscount: 31200,
      followed: true
    },

    {
      fullName: "Ananya Singh",
      title: "Product Designer",
      profile: "https://i.pravatar.cc/300?img=44",
      coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      likecount: 2890,
      postcount: 76,
      viewscount: 19800,
      followed: false
    },

    {
      fullName: "Kabir Malhotra",
      title: "Full Stack Developer",
      profile: "https://i.pravatar.cc/300?img=11",
      coverImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      likecount: 5120,
      postcount: 156,
      viewscount: 42700,
      followed: true
    },

    {
      fullName: "Meera Joshi",
      title: "Digital Creator",
      profile: "https://i.pravatar.cc/300?img=32",
      coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      likecount: 6340,
      postcount: 143,
      viewscount: 52100,
      followed: true
    },

    {
      fullName: "Vihaan Raj",
      title: "AI/ML Engineer",
      profile: "https://i.pravatar.cc/300?img=13",
      coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      likecount: 3780,
      postcount: 112,
      viewscount: 28600,
      followed: false
    },

    {
      fullName: "Kiara Verma",
      title: "Content Creator",
      profile: "https://i.pravatar.cc/300?img=49",
      coverImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
      likecount: 7210,
      postcount: 187,
      viewscount: 68300,
      followed: true
    },

    {
      fullName: "Reyansh Kapoor",
      title: "Cyber Security Analyst",
      profile: "https://i.pravatar.cc/300?img=14",
      coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      likecount: 1980,
      postcount: 64,
      viewscount: 14200,
      followed: false
    },

    {
      fullName: "Aadhya Sharma",
      title: "Software Developer",
      profile: "https://i.pravatar.cc/300?img=45",
      coverImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      likecount: 5470,
      postcount: 135,
      viewscount: 39500,
      followed: true
    }
  ];

  // const users = [
  //   {
  //     fullName: "Arjun Mehra",
  //     title: "Frontend Developer",
  //     profile: "https://i.pravatar.cc/300?img=12",
  //     coverImage: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=80",
  //     paragraph: "Passionate frontend developer who loves creating modern, responsive, and user-friendly web experiences.",
  //     likecount: 2450,
  //     postcount: 86,
  //     viewscount: 18500,
  //     followed: true
  //   },
  // ]
  
  return (
    <div className='container'>

      {users.map(function (elem) {
        return <Card elem={elem} />
      })}



    </div>
  )
}

export default App