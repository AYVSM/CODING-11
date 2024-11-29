async function getTickets() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
        next: {
            revalidate: 0
        }
    })

    return res.json()
 }

 export default async function TicketList() {
    const tickets = await getTickets()

    return (
        <>
        {tickets.map((ticket) => (
            <div key={ticket.id} className="card my-5">
            <h3>{ticket.title}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, aliquam iure. Quibusdam quo reprehenderit earum id dolore modi officia accusantium iste porro, mollitia vitae, rem et minus sed magnam hic?</p>
            <div className={`pill ${ticket.completed}`}>
                {ticket.completed}
            </div>
            </div>
        ))}
        {tickets.length === 0 && (
            <p className="text-center">There are no open tickets, yay!</p>
        )}
        </>
    )
 }
