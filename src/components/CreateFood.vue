<template>
  <div class="container fluid">
    <br />
    <div>
      <div class="card">
        <div class="card-header">
          <h2>AddProgress</h2>
        </div>
        <br>
        <div class="card-body">
          <div class="row g-2">
            <div class="col-md">
              <div class="form-floating mb-3">
                <input type="text" class="form-control" v-model="name" />
                <label for="floatingInputGrid">Name/Company</label>
              </div>
            </div>
            <div class="col-md">
              <div class="form-floating mb-3">
                <input type="text" class="form-control" v-model="price" />
                <label for="floatingInputGrid">LastName</label>
              </div>
            </div>
          </div>
          <div class="row g-2">
            <div class="col-md">
              <div class="form-floating mb-3">
                <input
                  type="tel"
                  class="form-control"
                  id="phone-number"
                  maxlength="10"
                />
                <label for="floatingInputGrid">PhoneNumber1</label>
              </div>
            </div>

            <div class="col-md">
              <div class="form-floating mb-3">
                <input
                  type="tel"
                  class="form-control"
                  id="phone-number2"
                  maxlength="10"
                />
                <label for="floatingInputGrid">PhoneNumber2</label>
              </div>
            </div>
          </div>

          <div class="form-floating">
            <select
              class="form-select"
              id="Building-Name"
              aria-label="Floating label select example"
            >
            </select>
            <label for="floatingSelect">BuildingName</label>
          </div>
          <br />

          <div class="row g-2">
            <div class="col-md">
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="Building-No" />
                <label for="floatingInputGrid">Building No.</label>
              </div>
            </div>
            <div class="col-md">
              <div class="form-floating mb-3">
                <input class="form-control" type="number" id="Floor-No" />
                <label for="floatingInputGrid">Floor No.</label>
              </div>
            </div>
            <div class="col-md">
              <div class="form-floating mb-3">
                <input class="form-control" type="number" id="Room-No" />
                <label for="floatingInputGrid">Room No.</label>
              </div>
            </div>
          </div>

          <div class="row g-2">
            <div class="col-md">
              <div class="form-floating mb-3">
                <select class="form-select" id="ISP">
                  <option value="true">TRUE</option>
                  <option value="AIS">AIS</option>
                  <option value="3BB">3BB</option>
                  <option value="FiberNet">FiberNet</option>
                  <option value="TXRX">TXRX</option>
                  <option value="TOT">TOT</option>
                </select>
                <label for="floatingInputGrid">ISP</label>
              </div>
            </div>
            <div class="col-md">
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="ISP-Code" />
                <label for="floatingInputGrid">ISP Code</label>
              </div>
            </div>
            <div class="col-md">
              <div class="form-floating mb-3">
                <input class="form-control" type="number" id="Member-Number" />
                <label for="floatingInputGrid">MemberNumber</label>
              </div>
            </div>
            <div class="col-md">
              <div class="form-floating mb-3">
                <input class="form-control" type="number" id="Fees" />
                <label for="floatingInputGrid">Fees</label>
              </div>
            </div>
          </div>

          <div class="row g-2">
            <div class="col-md">
              <div class="form-floating mb-3">
                <select class="form-select" id="Confirming"> </select>
                <label for="floatingInputGrid">Confirming an appointment</label>
              </div>
            </div>
            <div class="col-md">
              <div class="form-floating mb-3">
                <select class="form-select" id="Team"> </select>
                <label for="floatingInputGrid">Team</label>
              </div>
            </div>
            <div class="col-md">
              <div class="form-floating mb-3">
                <input class="form-control" type="date" value="" id="Date" />
                <label for="floatingInputGrid">Date</label>
              </div>
            </div>
            <div class="col-md">
              <div class="form-floating mb-3">
                <input class="form-control" type="time" value="" id="Time" />
                <label for="floatingInputGrid">Time</label>
              </div>
            </div>
          </div>

          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="Remark" />
            <label for="floatingInput">Remark</label>
          </div>

          <div class="row g-2">
            <div class="col-md">
              <div class="form-floating mb-3">
                <select class="form-select" id="Status"> </select>
                <label for="floatingInputGrid">Status</label>
              </div>
            </div>
            <div class="col-md">
              <div class="form-floating mb-3">
                <select class="form-select" id="Sub-Status"> </select>
                <label for="floatingInputGrid">SubStatus</label>
              </div>
            </div>
            <div class="col-md">
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  type="date"
                  value=""
                  id="DateConnect"
                />
                <label for="floatingInputGrid">DateConnect</label>
              </div>
            </div>
            <div class="col-md">
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  type="date"
                  value=""
                  id="DateDisconnect"
                />
                <label for="floatingInputGrid">DateDisconnect</label>
              </div>
            </div>
          </div>
          <br>
          <form v-on:submit.prevent="addFood()">
            <button type="submit" class="btn btn-primary">AddProgress</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      price: "",
    };
  },
  methods: {
    addFood() {
      if (this.name) {
        let payload = { name: this.name, price: this.price };
        this.$store.dispatch("addFood", payload);
      }
    },
  },
};
</script>
