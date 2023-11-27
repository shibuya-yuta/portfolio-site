<script lang="ts">
  import { GetNav } from "@lib/utils/GetNav";

  const NavList = GetNav();

  export let nav_open: boolean = false;
  function NavOpen() {
    nav_open = !nav_open;

    // const body = document.querySelector<HTMLElement>("body");
    // if (body) {
    //   if (nav_open) {
    //     body.style.overflow = "hidden";
    //   } else {
    //     body.style.overflow = "";
    //   }
    // }
  }
</script>

<div class="header" class:nav-open={nav_open === true}>
  <header class="header-bar">
    <h1 class="header-bar-title">SHIBUYA Dev</h1>
    <nav class="header-bar-nav">
      <ul>
        <li>
          <button on:click={NavOpen}>
            <div class="header-bar-nav-btn">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </li>
      </ul>
    </nav>
  </header>

  <div class="side-bar-nav">
    <nav class="nav-list">
      <ul>
        {#each NavList as item}
          <li class="nav-list-item">
            <a href={item.link} class="nav-link">
              <div>
                <h3 class="nav-title">{item.title}</h3>
              </div>
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>

  <div>
    <button class="mask" on:click={NavOpen}></button>
  </div>
</div>

<style lang="scss">
  .header {
    display: block;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    & .header-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
      background-color: #000;
      padding: 20px 30px;
      width: 100%;
      height: var(--header-height);
      min-height: var(--header-height);
      box-shadow:
        0px 2.8px 2.2px rgba(0, 0, 0, 0.07),
        0px 6.7px 5.3px rgba(0, 0, 0, 0.05),
        0px 12.5px 10px rgba(0, 0, 0, 0.042),
        0px 22.3px 17.9px rgba(0, 0, 0, 0.035),
        0px 41.8px 33.4px rgba(0, 0, 0, 0.028),
        0px 100px 80px rgba(0, 0, 0, 0.02);

      &-title {
        font-size: 1.5rem;
        font-family: var(--title-font);
      }

      button {
        width: 32px;
        aspect-ratio: 1/1;
        position: relative;

        & .header-bar-nav-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          position: absolute;
          width: 100%;
          aspect-ratio: 1/1;
          top: 0;
          left: 0;
          z-index: 3000;

          & span {
            display: block;
            width: 100%;
            height: 4px;
            border-radius: 14px;
            transition: all 0.25s;
            background-color: #fff;
          }
        }
      }
    }

    & .side-bar-nav {
      background-color: var(--main-color);
      position: absolute;
      top: 0;
      right: -350px;
      width: 300px;
      height: 110vh;
      z-index: 2000;
      transition: all 0.25s;

      & .nav-list {
        width: 100%;
        height: 100vh;
        margin-top: var(--header-height);
        padding: 0 40px;

        & .nav-list-item {
          color: #fff;
          font-family: var(--title-font);

          & .nav-link {
            display: block;
            width: 100%;
            height: 100%;
            padding: 20px 0;
          }

          & .nav-title {
            font-size: 1.2rem;
          }
        }
      }
    }
  }

  .nav-open {
    & .header-bar {
      button {
        & .header-bar-nav-btn {
          & span {
            background-color: #fff;

            &:nth-child(1) {
              transform: translateY(14.5px) rotate(-315deg);
            }

            &:nth-child(2) {
              opacity: 0;
            }

            &:nth-child(3) {
              transform: translateY(-14.5px) rotate(315deg);
            }
          }
        }
      }
    }

    & .side-bar-nav {
      right: 0;
    }

    & .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 110vh;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.25s;
    }
  }
</style>
