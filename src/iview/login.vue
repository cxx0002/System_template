<template>
  <div class="login">
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline class="form">
      <FormItem prop="user">
        <Input type="text" v-model="formInline.user" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="formInline.password" placeholder="Password">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
          localStorage.setItem("header", "abcdefg");
          var token = localStorage.getItem("header");
          this.$store.commit("setToken", token);
          console.log(this.$store.state.token);
          this.$router.push({ path: "/" });
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
   
  }
};
</script>
<style scoped>
.form {
  margin-top: 20%;
  width: 100%;
  display: flex;
  height: 120px;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
.form div {
  width: 200px;
}
.login {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.5)
}
</style>

