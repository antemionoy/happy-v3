const Breadcrumbs = (props) => {
  return (
    <div className='breadcrumbs'>
      {props.items.map((item, index) => (
        <div className="breadcrumbs__item" key={index}>
          <a href={item.href}>{item.title}</a>
        </div>
      ))}
    </div>
  )
}

export default Breadcrumbs
