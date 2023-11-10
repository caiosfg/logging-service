interface ICard {
  id: number,
  ip : string,
  date: string,
  name: string,
  type: string,
  text: string
}

export const Card = ({ id, ip, date, name, type, text } : ICard) => {
console.log("🚀 ~ file: Card.tsx:6 ~ Card ~ id:", id)
    return (
      <div className="card">
        <h1>Alert {id}</h1>
        <p>Please check de size of mount{ip}</p>
        <p>Please check de size of mount{date}</p>
        <p>Please check de size of mount{name}</p>
        <p>Please check de size of mount{type}</p>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s{text}</p>
      </div>
    )
}