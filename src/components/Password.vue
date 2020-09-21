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
          <input type="text" required />
          <input type="text" required />
        </div>
      </div>
      <input type="submit" value="Update" />
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

.icon-site {
  display: flex;
  margin-left: 1rem;
}

.icon-site h3 {
  padding-left: 1.5rem;
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

input[type="submit"]:hover {
  transform: scale(1.1) perspective(1px);
}

/*responsiveness*/
@media (max-width: 576px) {
  .site-info {
    width: 300px;
    padding-bottom: 0.5rem;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    height: 136px;
  }
  .password-area {
    margin-left: 0.5rem;
  }
  label {
    margin: 0.55rem 0;
    width: 110%;
  }
  input[type="text"] {
    width: 80%;
    margin: 0.5rem 1rem;
  }
  input[type="submit"] {
    margin-left: 75%;
    height: 20px;
    background: #ffffff;
    box-shadow: 1px 1px 12px -1px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    border: none;
  }
}

</style>
