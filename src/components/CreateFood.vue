<template>
	<div class="container fluid">
		<br />
		<div>
			<div class="card">
				<div class="card-header">
					<h2>AddProgress X</h2>
				</div>
				<br />
				<div class="card-body">
					<div class="row g-2">
						<div class="col-md">
							<div class="form-floating mb-3">
								<input
									type="text"
									class="form-control"
									v-model="progress.name"
								/>
								<label for="floatingInputGrid">Name/Company</label>
							</div>
						</div>
						<div class="col-md">
							<div class="form-floating mb-3">
								<input
									type="text"
									class="form-control"
									v-model="progress.lastname"
								/>
								<label for="floatingInputGrid">LastName</label>
							</div>
						</div>
					</div>
					<div class="row g-2">
						<div class="col-md">
							<div class="form-floating mb-3">
								<input
									type="number"
									class="form-control"
									v-model="progress.tel"
								/>
								<label for="floatingInputGrid">PhoneNumber1</label>
							</div>
						</div>

						<div class="col-md">
							<div class="form-floating mb-3">
								<input
									type="number"
									class="form-control"
									v-model="progress.tel2"
								/>
								<label for="floatingInputGrid">PhoneNumber2</label>
							</div>
						</div>
					</div>

					<div class="form-floating">
						<input
							type="text"
							class="form-control"
							v-model="progress.building"
						/>
						<label for="floatingSelect">BuildingName</label>
					</div>
					<br />

					<div class="row g-2">
						<div class="col-md">
							<div class="form-floating mb-3">
								<input
									type="text"
									class="form-control"
									v-model="progress.BuildingNo"
								/>
								<label for="floatingInputGrid">Building No.</label>
							</div>
						</div>
						<div class="col-md">
							<div class="form-floating mb-3">
								<input
									type="text"
									class="form-control"
									v-model="progress.Floor"
								/>
								<label for="floatingInputGrid">Floor No.</label>
							</div>
						</div>
						<div class="col-md">
							<div class="form-floating mb-3">
								<input
									type="text"
									class="form-control"
									v-model="progress.Room"
								/>
								<label for="floatingInputGrid">Room No.</label>
							</div>
						</div>
					</div>

					<div class="row g-2">
						<div class="col-md">
							<div class="form-floating mb-3">
								<select class="form-select" id="ISP" v-model="progress.isp">
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
								<input
									type="text"
									class="form-control"
									v-model="progress.ISPCode"
								/>
								<label for="floatingInputGrid">ISP Code</label>
							</div>
						</div>
						<div class="col-md">
							<div class="form-floating mb-3">
								<input
									type="text"
									class="form-control"
									v-model="progress.MemberNumber"
								/>
								<label for="floatingInputGrid">MemberNumber</label>
							</div>
						</div>
						<div class="col-md">
							<div class="form-floating mb-3">
								<input
									type="text"
									class="form-control"
									v-model="progress.Fees"
								/>
								<label for="floatingInputGrid">Fees</label>
							</div>
						</div>
					</div>

					<div class="row g-2">
						<div class="col-md">
							<div class="form-floating mb-3">
								<select
									type="text"
									class="form-control"
									v-model="progress.Confirming"
								>
									<option value="ยืนยัน">ยืนยัน</option>
									<option value="ลูกค้าขอเลื่อน">ลูกค้าขอเลื่อน</option>
									<option value="ติดต่อไม่ได้">ติดต่อไม่ได้</option>
								</select>
								<label for="floatingInputGrid">Confirming an appointment</label>
							</div>
						</div>
						<div class="col-md">
							<div class="form-floating mb-3">
								<select class="form-select" id="ISP" v-model="progress.team">
									<option value="L-นรินทร์">L-นรินทร์</option>
									<option value="L-ยงยุทธ">L-ยงยุทธ</option>
									<option value="L-ยุ">L-ยุ</option>
									<option value="L-วา">L-วา</option>
									<option value="PK-ช้าง">PK-ช้าง</option>
									<option value="PK-ดุง">PK-ดุง</option>
									<option value="PK-ตี๋">PK-ตี๋</option>
									<option value="PK-บาส">PK-บาส</option>
									<option value="PK-ประทวน">PK-ประทวน</option>
									<option value="PK -มิว">PK-มิว</option>
									<option value="PK -เลน">PK-เลน</option>
									<option value="PK -เสรี">PK-เสรี</option>
									<option value="DC -NN ฟู">DC-NNฟู</option>
								</select>
								<label for="floatingInputGrid">TechnicianTeam</label>
							</div>
						</div>
						<div class="col-md">
							<div class="form-floating mb-3">
								<input
									type="date"
									class="form-control"
									v-model="progress.lastDate"
								/>
								<label for="floatingInputGrid">lastDate</label>
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
								<select class="form-select" id="Status"></select>
								<label for="floatingInputGrid">Status</label>
							</div>
						</div>
						<div class="col-md">
							<div class="form-floating mb-3">
								<select class="form-select" id="Sub-Status"></select>
								<label for="floatingInputGrid">SubStatus</label>
							</div>
						</div>
						<div class="col-md">
							<div class="form-floating mb-3">
								<input
									class="form-control"
									type="date"
									id="DateConnect"
									v-model="progress.DateConnect"
								/>
								<label for="floatingInputGrid">DateConnect</label>
							</div>
						</div>
						<div class="col-md">
							<div class="form-floating mb-3">
								<input
									class="form-control"
									type="date"
									id="DateDisconnect"
									v-model="progress.DateDisconnect"
								/>
								<label for="floatingInputGrid">DateDisconnect</label>
							</div>
						</div>
					</div>
					<br />
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
			progress: {
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
				DateConnect: '',
				DateDisconnect: '',
			},
		};
	},
	methods: {
		addFood() {
			this.$store.dispatch('addFood', this.progress);
			alert('save success');
		},
	},
};
</script>
