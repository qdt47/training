// ハンバーガーアイコンとサイドメニューの要素を取得
const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");

menuToggle.addEventListener("click", function () {
  // サイドメニューの開閉
  sideMenu.classList.toggle("is-open");

  // ★★★ 追加: アイコンの形を「X」に変えるクラスの切り替え ★★★
  menuToggle.classList.toggle("is-active");
});

// メニューリンククリック時もメニューとアイコンを閉じる
document.querySelectorAll(".side-menu__item a").forEach((item) => {
  item.addEventListener("click", () => {
    sideMenu.classList.remove("is-open");

    // ★★★ 追加: アイコンも閉じた状態に戻す ★★★
    menuToggle.classList.remove("is-active");
  });
});
