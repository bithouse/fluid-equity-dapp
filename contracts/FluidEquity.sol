contract FluidEquity {

    address seed;
    address renter;
    address left;


    uint value;
    uint rooms;
    uint empty;
    uint cost;
    uint fee;


    enum State {Open, Closed}
    State state;


    function setHouse(uint v, uint r, uint c, uint f) {
        seed = msg.sender;
        value = v;
        rooms = r;
        empty = r;
        cost = c;
        fee = f;
    }

    function rentRoom() {

        if (state != State.Open) throw;
        if (msg.value != cost) throw;
        if (empty < 1)  state = State.Closed;
        renter = msg.sender;
        empty = empty -1;
    }

    function CancelRoom() {

        if (msg.sender != renter) throw;
        empty = empty + 1;
        state = State.Open;
        left = msg.sender;
    }

}
