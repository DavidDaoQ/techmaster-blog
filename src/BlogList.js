import React from "react";
import BlogItem from "./BlogItem";

const BlogList = () => {
  const blogList = [
    {
      id: 1,
      title: "Cách sử dụng CSS text-shadow: 11 thủ thuật và ví dụ",
      description:
        "CSS là ngôn ngữ thiết kế giúp trang web trở nên thanh lịch hơn so với các đoạn văn bản đơn giản...",
      date: "June 1, 2023",
      views: 100,
      image: "https://media.techmaster.vn/api/static/OH6Sopmw/6VLCbrmM",
    },
    {
      id: 2,
      title: "10 mẹo và thủ thuật để xử lý JavaScript Objects.",
      description:
        "Một object là khối xây dựng cơ bản của các chương trình trong JavaScript, được sử dụng trong các class xây dựng...",
      date: "23 tháng 06, 2023",
      views: 34,
      image: "https://techmaster.vn/resources/image/thumbnail.jpg",
    },
    {
      id: 3,
      title: "So sánh về RBAC và ABAC",
      description:
        "Hai hệ thống phân quyền phổ biến trong quản lý quyền truy cập là RBAC (Role-Based Access Control) và ABAC...",
      date: "23 tháng 06, 2023",
      views: 41,
      image: "https://techmaster.vn/resources/image/thumbnail.jpg",
    },
    // Add more blog items as needed
  ];

  return (
    <div className="blog-list">
      {blogList.map((blog) => (
        <BlogItem
          key={blog.id}
          title={blog.title}
          description={blog.description}
          date={blog.date}
          views={blog.views}
          image={blog.image}
        />
      ))}
    </div>
  );
};

export default BlogList;
