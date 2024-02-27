// JavaScript code for dynamically generating nested comments
const comments = [
    {
      id: 1,
      text: "This is the first comment",
      parentId: null,
      replies: [
        {
          id: 2,
          text: "This is a reply to the first comment",
          parentId: 1,
          replies: [
            {
              id: 3,
              text: "This is a nested reply",
              parentId: 2,
              replies: [] // Further nesting possible
            }
          ]
        }
      ]
    },
    {
      id: 4,
      text: "This is an independent comment",
      parentId: null,
      replies: []
    },
    // Additional comment objects...
  ];
  
  // Function to generate nested comments HTML
  function generateComments(comments, level) {
    let html = "";
    comments.forEach(comment => {
      // Add indentation or styling based on nesting level
      const style = `margin-left: ${level * 20}px;`;
  
      // Create HTML for the comment
      html += `<div class="comment" style="${style}">${comment.text}</div>`;
  
      // Recursively generate HTML for replies
      if (comment.replies.length > 0) {
        html += generateComments(comment.replies, level + 1);
      }
    });
    return html;
  }
  
  // Get the container element
  const commentsContainer = document.getElementById("commentsContainer");
  
  // Generate and append nested comments HTML to the container
  commentsContainer.innerHTML = generateComments(comments, 0);
  