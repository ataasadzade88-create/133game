// گرفتن المان‌ها
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

// نمایش رمز
document.addEventListener("click", function(e){
  if(e.target.id==="togglePassword"){
    let p=document.getElementById("password");
    p.type = p.type==="password" ? "text" : "password";
  }

  if(e.target.id==="toggleNewPass"){
    let p=document.getElementById("newPass");
    p.type = p.type==="password" ? "text" : "password";
  }
});

// نوتیف
function toast(msg, ok=true){
  const t = document.getElementById("toast");
  if(!t) return;

  t.innerText = msg;
  t.style.background = ok ? "#00f2fe" : "#ff4d4d";
  t.classList.add("show");

  setTimeout(()=>t.classList.remove("show"),3000);
}

// ثبت نام
if(signupForm){
  signupForm.addEventListener("submit", function(e){
    e.preventDefault();

    const u = document.getElementById("newUser").value;
    const p = document.getElementById("newPass").value;

    localStorage.setItem("user_"+u, p);

    toast("✅ اکانت ساخته شد");
    setTimeout(()=>location.href="login.html",1500);
  });
}

// لاگین
if(loginForm){
  loginForm.addEventListener("submit", function(e){
    e.preventDefault();

    const u = document.getElementById("username").value;
    const p = document.getElementById("password").value;

    const saved = localStorage.getItem("user_"+u);

    if(saved === p){
      const sound = document.getElementById("engineSound");
      if(sound){
        sound.currentTime = 0;
        sound.play().catch(()=>{});
      }

      toast("🚀 ورود موفق");

      setTimeout(()=>{
        location.href = "dashboard.html";
      },1500);

    }else{
      toast("❌ اطلاعات اشتباهه", false);
    }
  });
}

// موزیک داشبورد (با اولین کلیک)
const bg = document.getElementById("bgMusic");
if(bg){
  document.body.addEventListener("click", ()=>{
    bg.play().catch(()=>{});
  }, {once:true});
}

// خروج
function logout(){
  location.href = "login.html";
}