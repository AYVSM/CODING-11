import TicketList from "./Ticketlist"

function Tickets() {
    return (
        <main>
            <nav>
                <div>
                    <h2>Tickets</h2>
                    <p><small>Currently open tickets</small></p>
                </div>
            </nav>
            <TicketList/>
        </main>
    )
}

export default Tickets