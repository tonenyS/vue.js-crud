<template>
	<div class="container-fluid">
		<br />
		<div>
			<div class="card" style="width: 118em">
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
								<!-- <th>Tel2</th> -->
								<th>Floor</th>
								<th>Room</th>
								<th>ISP</th>
								<th>ISP-CODE</th>
								<!-- <th>MemberNumber</th> -->
								<!-- <th>Fees</th> -->
								<th>Confirming</th>
								<th>Team</th>
								<th>Delete/Edit</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(food, index) in $store.getters.foods" :key="index">
								<td>{{ index + 1 }}</td>
								<td v-if="index !== editIndex">{{ food.building }}</td>
								<td v-if="index !== editIndex">{{ food.name }}</td>
								<td v-if="index !== editIndex">{{ food.lastname }}</td>
								<td v-if="index !== editIndex">{{ food.tel }}</td>
								<!-- <td v-if="index !== editIndex">{{ food.tel2 }}</td> -->
								<td v-if="index !== editIndex">{{ food.Floor }}</td>
								<td v-if="index !== editIndex">{{ food.Room }}</td>
								<td v-if="index !== editIndex">{{ food.isp }}</td>
								<td v-if="index !== editIndex">{{ food.ISPCode }}</td>
								<!-- <td v-if="index !== editIndex">{{ food.MemberNumber }}</td> -->
								<!-- <td v-if="index !== editIndex">{{ food.Fees }}</td> -->
								<td v-if="index !== editIndex">{{ food.Confirming }}</td>
								<td v-if="index !== editIndex">{{ food.team }}</td>
								<td v-if="index !== editIndex">
									<button
										type="button"
										class="btn btn-danger mr-2"
										v-on:click="deleteFood(index, food._id)"
									>
										ลบ
									</button>
									<button
										type="button"
										class="btn btn-warning"
										v-on:click="openEdit(index)"
									>
										แก้ไข
									</button>
								</td>

								<td v-if="index === editIndex">
									<input
										style="width: 250px"
										type="text"
										:value="food.building"
										class="form-control"
										v-on:change="building = $event.target.value"
									/>
								</td>

								<td v-if="index === editIndex">
									<input
										style="width: 200px"
										type="text"
										:value="food.name"
										class="form-control"
										v-on:change="name = $event.target.value"
									/>
								</td>
								<td v-if="index === editIndex">
									<input
										style="width: 200px"
										type="text"
										:value="food.lastname"
										class="form-control"
										v-on:change="lastname = $event.target.value"
									/>
								</td>
								<td v-if="index === editIndex">
									<input
										style="width: 120px"
										type="tel"
										:value="food.tel"
										class="form-control"
										v-on:change="tel = $event.target.value"
									/>
								</td>
								<!-- <td v-if="index === editIndex">
                  <input
                    style="width:120px"
                    type="tel"
                    :value="food.tel2"
                    class="form-control"
                    v-on:change="tel2 = $event.target.value"
                  />
                </td> -->
								<td v-if="index === editIndex">
									<input
										style="width: 75px"
										type="number"
										:value="food.Floor"
										class="form-control"
										v-on:change="Floor = $event.target.value"
									/>
								</td>
								<td v-if="index === editIndex">
									<input
										style="width: 75px"
										type="number"
										:value="food.Room"
										class="form-control"
										v-on:change="Room = $event.target.value"
									/>
								</td>

								<td v-if="index === editIndex">
									<select
										style="width: 85px"
										type="text"
										:value="food.isp"
										class="form-control"
										v-on:change="isp = $event.target.value"
									>
										<option value="true">TRUE</option>
										<option value="AIS">AIS</option>
										<option value="3BB">3BB</option>
										<option value="FiberNet">FiberNet</option>
										<option value="TXRX">TXRX</option>
										<option value="TOT">TOT</option>
									</select>
								</td>
								<td v-if="index === editIndex">
									<input
										style="width: 120px"
										type="text"
										:value="food.ISPCode"
										class="form-control"
										v-on:change="ISPCode = $event.target.value"
									/>
								</td>
								<!-- <td v-if="index === editIndex">
                  <input
                    style="width:100px"
                    type="text"
                    :value="food.MemberNumber"
                    class="form-control"
                    v-on:change="MemberNumber = $event.target.value"
                  />
                </td>
                <td v-if="index === editIndex">
                  <input
                    style="width:80px"
                    type="text"
                    :value="food.Fees"
                    class="form-control"
                    v-on:change="Fees = $event.target.value"
                  />
                </td> -->
								<td v-if="index === editIndex">
									<select
										style="width: 120px"
										type="text"
										:value="food.Confirming"
										class="form-control"
										v-on:change="Confirming = $event.target.value"
									>
										<option value="ยืนยัน">ยืนยัน</option>
										<option value="ลูกค้าขอเลื่อน">ลูกค้าขอเลื่อน</option>
										<option value="ติดต่อไม่ได้">ติดต่อไม่ได้</option>
									</select>
								</td>
								<td v-if="index === editIndex">
									<select
										style="width: 105px"
										type="text"
										:value="food.team"
										class="form-control"
										v-on:change="team = $event.target.value"
									>
										<option value="L-นรินทร์">L-นรินทร์</option>
										<option value="L-ยงยุทธ">L-ยงยุทธ</option>
										<option value="L-ยุ">L-ยุ</option>
										<option value="L-วา">L-วา</option>
										<option value="PK-ช้าง">PK-ช้าง</option>
										<option value="PK-ดุง">PK-ดุง</option>
										<option value="PK-ตี๋">PK-ตี๋</option>
										<option value="PK-บาส">PK-บาส</option>
										<option value="PK-ประทวน">PK-ประทวน</option>
										<option value="PK-มิว">PK-มิว</option>
										<option value="PK-เลน">PK-เลน</option>
										<option value="PK-เสรี">PK-เสรี</option>
										<option value="DC-NNฟู">DC-NNฟู</option>
									</select>
								</td>
								<td v-if="index === editIndex">
									<button
										type="button"
										class="btn btn-success mr-2"
										v-on:click="editFood(food._id)"
									>
										ยืนยัน
									</button>
									<button
										type="button"
										class="btn btn-secondary"
										v-on:click="closeEdit(index)"
									>
										ยกเลิก
									</button>
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
			building: '',
			buildingNo: '',
			lastDate: '',
			name: '',
			lastname: '',
			tel: '',
			tel2: '',
			Floor: '',
			Room: '',
			isp: '',
			ISPCode: '',
			MemberNumber: '',
			Fees: '',
			team: '',
			Confirming: '',
			time: '',
			Remark: '',
			Status: '',
			SubStatus: '',
			ateConnect: '',
			DateDisconnect: '',
		};
	},
	created() {
		this.fetchFood();
	},
	methods: {
		fetchFood() {
			this.$store.dispatch('fetchFood');
		},
		deleteFood(index, _id) {
			let payload = { index: index, _id: _id };
			this.$store.dispatch('deleteFood', payload);
		},
		openEdit(index) {
			this.$router.push(`/create_FM/${index}`);
			// this.editIndex = index;
			// this.building = food.building;
			// this.name = food.name;
			// this.lastname = food.lastname;
			// this.tel = food.tel;
			// this.tel2 = food.tel2;
			// this.Floor = food.Floor;
			// this.Room = food.Room;
			// this.isp = food.isp;
			// this.ISPCode = food.ISPCode;
			// this.MemberNumber = food.MemberNumber;
			// this.Fees = food.Fees;
			// this.team = food.team;
			// this.Confirming = food.Confirming;
		},
		closeEdit() {
			this.editIndex = -1;
			this.building = '';
			this.name = '';
			this.lastname = '';
			this.tel = '';
			this.tel2 = '';
			this.Floor = '';
			this.Room = '';
			this.isp = '';
			this.ISPCode = '';
			this.MemberNumber = '';
			this.Fees = '';
			this.team = '';
			this.Confirming = '';
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
				Room: this.Room,
				isp: this.isp,
				ISPCode: this.ISPCode,
				MemberNumber: this.MemberNumber,
				Fees: this.Fees,
				team: this.team,
				Confirming: this.Confirming,
			};
			this.$store.dispatch('editFood', payload).then(this.closeEdit());
		},
	},
};
</script>
