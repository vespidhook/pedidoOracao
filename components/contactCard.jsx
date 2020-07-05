import React from 'react'

const ContactCard = props => {
  const { imageSrc, imageAlt, link, title, content } = props
  return (
    <div className="max-w-sm min-w-sm mx-4 my-8 rounded overflow-hidden shadow-lg" style={{ height: '400px'}}>
        <img src={imageSrc} alt={imageAlt} />
        <div className="px-6 py-4">
          <a href={link} target='_blank'><div className="hover:underline text-center font-bold text-xl mb-2">{title}</div></a>
          <p className="text-gray-700 text-base text-center">
            {content}
          </p>
      </div>
    </div>
  )
}

export default ContactCard