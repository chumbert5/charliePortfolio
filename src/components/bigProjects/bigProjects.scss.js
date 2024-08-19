.big-projects {
  display: flex;
  flex-direction: column;
  align-items: center;

  .tabs {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;
  }

  .tab {
    background-color: #f4f4f4;
    border: none;
    padding: 10px;
    cursor: pointer;
    text-align: left;
    width: 100%;
    transition: background-color 0.3s ease;

    &.active {
      background-color: #ddd;
    }

    &:hover {
      background-color: #eee;
    }
  }

  .content {
    width: 100%;
    height: 400px;
    overflow-y: scroll;
    border: 1px solid #ddd;
    padding: 20px;

    .project-details {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        max-width: 100%;
        height: auto;
        margin-bottom: 15px;
      }

      h3 {
        margin-bottom: 10px;
      }

      a {
        margin-top: 10px;
        color: #007bff;
        text-decoration: none;
      }
    }
  }
}