import React from 'react'

const Profile = (name,desc,data,handleEdit,handleDelete) => {
  return (
    <section className='w-full'>
      <h1 className='head_text text_left'>
        <span className='blue_gradient'>{name} Profile</span>
      </h1>
      <p className='desc text_left'>{desc}</p>

      <div className='mt-16 prompt_layout'>
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={()=> handleEdit && handleEdit()}
            handleDelete={()=>handleDelete && handleDelete()}
          />
        ))}
      </div>
    </section>
  )
}

export default Profile

