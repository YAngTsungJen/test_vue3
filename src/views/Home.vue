<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Form @submit="onSubmit" v-slot=" { errors } ">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <Field id="email" name="email" v-model="user.email" type="email" class="form-control"
          rules="email|required" :class="{ 'is-invalid': errors['email'] }"  placeholder="請輸入 Email"></Field>
        <error-message name="email"  class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="name" class="form-label">姓名</label>
        <Field id="name" name="姓名" v-model="user.name" type="text" class="form-control" rules="required" :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入姓名"></Field>
        <error-message name="姓名" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="phone" class="form-label">電話</label>
        <Field id="phone" name="電話" v-model="user.phone" type="text" class="form-control" :rules="isPhone" :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入電話"></Field>
        <error-message name="電話" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="region" class="form-label">地區</label>
        <Field id="region" name="地區" v-model="user.region" class="form-control" as="select" rules="required" :class="{ 'is-invalid': errors['地區'] }">
          <option value="">請選擇地區</option>
          <option value="台北市">台北市</option>
          <option value="高雄市">高雄市</option>
        </Field>
        <error-message name="地區" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="address" class="form-label">地址</label>
        <Field id="address" name="地址" v-model="user.address" type="text" class="form-control"
                placeholder="請輸入地址"></Field>
        <error-message name="地址" class="invalid-feedback"></error-message>
      </div>

      <button class="btn btn-primary" type="submit">Submit</button>
    </Form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      user: {
        email: '',
        name: '',
        address: '',
        phone: '',
        region: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log(this.user)
    },
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    }
  },
  created () {
    console.log(this)
  }
}
</script>
