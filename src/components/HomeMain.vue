<template>
  <div class="container-fluid">
    <br />
    <div>
      <div class="card" style="width: 118em;">
        <div class="card-header">
          <h2>FM-Progress</h2>
        </div>
        <div class="card-body">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>No.</th>
                <th>BuildingName</th>
                <th>Project/Name</th>
                <th>LastName</th>
                <th>Tel</th>
                <th>Tel2</th>
                <th>Floor</th>
                <th>BuildingNo</th>
                <th>Room</th>
                <th>ISP</th>
                <th>ISP-CODE</th>
                <th>MemberNumber</th>
                <th>Fees</th>
                <th>Confirming</th>
                <th>Team</th>
                <th>Date</th>
            
              </tr>
            </thead>
            <tbody>
              <tr v-for="(food, index) in $store.getters.foods" :key="index">
                <td>{{ index + 1 }}</td>
                <td v-if="index !== editIndex">{{ food.building }}</td>
                <td v-if="index !== editIndex">{{ food.name }}</td>
                <td v-if="index !== editIndex">{{ food.lastname }}</td>
                <td v-if="index !== editIndex">{{ food.tel }}</td>
                <td v-if="index !== editIndex">{{ food.tel2 }}</td>
                <td v-if="index !== editIndex">{{ food.Floor }}</td>
                <td v-if="index !== editIndex">{{ food.BuildingNo }}</td>
                <td v-if="index !== editIndex">{{ food.Room }}</td>
                <td v-if="index !== editIndex">{{ food.isp }}</td>
                <td v-if="index !== editIndex">{{ food.ISPCode }}</td>
                <td v-if="index !== editIndex">{{ food.MemberNumber }}</td>
                <td v-if="index !== editIndex">{{ food.Fees }}</td>
                <td v-if="index !== editIndex">{{ food.Confirming }}</td>
                <td v-if="index !== editIndex">{{ food.team }}</td>
                <td v-if="index !== editIndex">{{ food.Date }}</td>
                <td v-if="index !== editIndex">
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editIndex: -1,
      building: "",
      name: "",
      lastname: "",
      tel: "",
      tel2: "",
      Floor: "",
      BuildingNo: "",
      Room: "",
      isp: "",
      ISPCode: "",
      MemberNumber: "",
      Fees: "",
      team: "",
      Confirming: "",
      Date: "",
      
    };
  },
  created() {
    this.fetchFood();
  },
  methods: {
    fetchFood() {
      this.$store.dispatch("fetchFood");
    },
    deleteFood(index, _id) {
      let payload = { index: index, _id: _id };
      this.$store.dispatch("deleteFood", payload);
    },
    openEdit(index, food) {
      this.editIndex = index;
      this.building = food.building;
      this.name = food.name;
      this.lastname = food.lastname;
      this.tel = food.tel;
      this.tel2 = food.tel2;
      this.Floor = food.Floor;
      this.BuildingNo = food.BuildingNo;
      this.Room = food.Room;
      this.isp = food.isp;
      this.ISPCode = food.ISPCode;
      this.MemberNumber = food.MemberNumber;
      this.Fees = food.Fees;
      this.team = food.team;
      this.Confirming = food.Confirming;
      this.Date = food.Date;
    },
    closeEdit() {
      this.editIndex = -1;
      this.building = "";
      this.name = "";
      this.lastname = "";
      this.tel = "";
      this.tel2 = "";
      this.Floor = "";
      this.BuildingNo = "";
      this.Room = "";
      this.isp = "";
      this.ISPCode = "";
      this.MemberNumber = "";
      this.Fees = "";
      this.team = "";
      this.Confirming = "";
      this.Date = "";
    },
    editFood(_id) {
      let payload = {
        index: this.editIndex,
        _id: _id,
        building: this.building,
        name: this.name,
        lastname: this.lastname,
        tel: this.tel,
        tel2: this.tel2,
        Floor: this.Floor,
        BuildingNo: this.BuildingNo,
        Room: this.Room,
        isp: this.isp,
        ISPCode: this.ISPCode,
        MemberNumber: this.MemberNumber,
        Fees: this.Fees,
        team: this.team,
        Confirming: this.Confirming,
        Date: this.Date,
      };
      this.$store.dispatch("editFood", payload).then(this.closeEdit());
    },
  },
};
</script>
