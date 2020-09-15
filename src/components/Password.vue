<template>
  <div class="site-info">
    <div class="icon-site">
      <img src="../assets/password.svg" alt="password-icon" />
      <h3>Change password</h3>
    </div>
    <form action="#">
      <div class="password-area">
        <div class="flex-column">
          <label for="current-password">Current password</label>
          <label for="new-password">New password</label>
        </div>
        <div class="flex-column">
          <input type="text" />
          <input type="text" />
        </div>
      </div>
      <input type="submit" value="Update password" />
    </form>
  </div>
</template>

<script></script>

<style scoped>
.site-info {
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  width: 450px;
  padding-bottom: 0.5rem;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #585858;
}
p {
  margin-top: 0px;
  margin-left: 2rem;
}
.icon-site {
  display: flex;
  margin-left: 1rem;
}

.icon-site h3 {
  padding-left: 1.5rem;
}

span {
  color: black;
  padding-left: 1rem;
}

.subheadline {
  border: 1px solid #c4c4c4;
}

.password-area {
  display: flex;
  margin-left: 2rem;
}

.flex-column {
  display: flex;
  flex-direction: column;
}
label {
  margin: 1rem 0;
}

input[type="text"] {
  width: 100%;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  margin: 1.1rem 1rem;
}

input[type="submit"] {
  margin-left: 65%;
  height: 30px;
  background: #ffffff;
  box-shadow: 1px 1px 12px -1px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  border: none;
}
</style>
