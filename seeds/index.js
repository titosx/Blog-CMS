const mongoose = require('mongoose');
const Post = require('../models/post');
const User = require('../models/user');

mongoose.connect('mongodb://localhost:27017/blog');
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const seedDB = async () => {
    await Post.deleteMany({});
    const post1 = new Post({
        image: "https://images.unsplash.com/photo-1585806413263-77b7992dcd11?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. #1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis mi sed risus ullamcorper egestas vel ut orci. Phasellus sed sapien non odio fermentum ullamcorper rhoncus quis nisi. Morbi gravida risus velit, ut tristique diam fringilla lobortis. Nunc posuere, massa sed varius tempus, massa ex lobortis erat, eu sollicitudin nunc mi viverra leo. Suspendisse ornare congue eleifend. Fusce mattis et sapien at varius. Nulla hendrerit, tortor eget vulputate fringilla, ante lorem vehicula odio, in suscipit odio felis in nisi. Nulla imperdiet sem eu varius convallis. Duis non libero tristique, euismod magna sed, convallis metus. Mauris vel nisi ac orci eleifend accumsan et ut ipsum. Sed eget ullamcorper tellus. Phasellus libero ligula, rutrum nec laoreet vitae, tempor non arcu. Morbi tempor maximus libero, nec dignissim tortor placerat a. Aenean id sodales tortor, sit amet porta purus. Mauris semper eros vitae nulla condimentum consequat. Etiam dolor elit, lobortis non mauris at, ornare scelerisque eros. Suspendisse condimentum purus augue, vitae lobortis est laoreet vitae. Sed pretium quis odio sed molestie. Phasellus id condimentum arcu. Nam sed faucibus felis, eu luctus dui. Morbi ultricies nec eros vitae tempus. Donec bibendum fringilla neque rhoncus euismod."
    });
    await post1.save();

    const post2 = new Post({
        image: "https://images.unsplash.com/photo-1617507405960-5df680d91f90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. #2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis mi sed risus ullamcorper egestas vel ut orci. Phasellus sed sapien non odio fermentum ullamcorper rhoncus quis nisi. Morbi gravida risus velit, ut tristique diam fringilla lobortis. Nunc posuere, massa sed varius tempus, massa ex lobortis erat, eu sollicitudin nunc mi viverra leo. Suspendisse ornare congue eleifend. Fusce mattis et sapien at varius. Nulla hendrerit, tortor eget vulputate fringilla, ante lorem vehicula odio, in suscipit odio felis in nisi. Nulla imperdiet sem eu varius convallis. Duis non libero tristique, euismod magna sed, convallis metus. Mauris vel nisi ac orci eleifend accumsan et ut ipsum. Sed eget ullamcorper tellus. Phasellus libero ligula, rutrum nec laoreet vitae, tempor non arcu. Morbi tempor maximus libero, nec dignissim tortor placerat a. Aenean id sodales tortor, sit amet porta purus. Mauris semper eros vitae nulla condimentum consequat. Etiam dolor elit, lobortis non mauris at, ornare scelerisque eros. Suspendisse condimentum purus augue, vitae lobortis est laoreet vitae. Sed pretium quis odio sed molestie. Phasellus id condimentum arcu. Nam sed faucibus felis, eu luctus dui. Morbi ultricies nec eros vitae tempus. Donec bibendum fringilla neque rhoncus euismod."
    });
    await post2.save();

    const post3 = new Post({
        image: "https://images.unsplash.com/photo-1593627906979-dc2fdc503e32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. #3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis mi sed risus ullamcorper egestas vel ut orci. Phasellus sed sapien non odio fermentum ullamcorper rhoncus quis nisi. Morbi gravida risus velit, ut tristique diam fringilla lobortis. Nunc posuere, massa sed varius tempus, massa ex lobortis erat, eu sollicitudin nunc mi viverra leo. Suspendisse ornare congue eleifend. Fusce mattis et sapien at varius. Nulla hendrerit, tortor eget vulputate fringilla, ante lorem vehicula odio, in suscipit odio felis in nisi. Nulla imperdiet sem eu varius convallis. Duis non libero tristique, euismod magna sed, convallis metus. Mauris vel nisi ac orci eleifend accumsan et ut ipsum. Sed eget ullamcorper tellus. Phasellus libero ligula, rutrum nec laoreet vitae, tempor non arcu. Morbi tempor maximus libero, nec dignissim tortor placerat a. Aenean id sodales tortor, sit amet porta purus. Mauris semper eros vitae nulla condimentum consequat. Etiam dolor elit, lobortis non mauris at, ornare scelerisque eros. Suspendisse condimentum purus augue, vitae lobortis est laoreet vitae. Sed pretium quis odio sed molestie. Phasellus id condimentum arcu. Nam sed faucibus felis, eu luctus dui. Morbi ultricies nec eros vitae tempus. Donec bibendum fringilla neque rhoncus euismod."
    });
    await post3.save();

    const post4 = new Post({
        image: "https://images.unsplash.com/photo-1629739182071-f6269b66c82d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. #4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis mi sed risus ullamcorper egestas vel ut orci. Phasellus sed sapien non odio fermentum ullamcorper rhoncus quis nisi. Morbi gravida risus velit, ut tristique diam fringilla lobortis. Nunc posuere, massa sed varius tempus, massa ex lobortis erat, eu sollicitudin nunc mi viverra leo. Suspendisse ornare congue eleifend. Fusce mattis et sapien at varius. Nulla hendrerit, tortor eget vulputate fringilla, ante lorem vehicula odio, in suscipit odio felis in nisi. Nulla imperdiet sem eu varius convallis. Duis non libero tristique, euismod magna sed, convallis metus. Mauris vel nisi ac orci eleifend accumsan et ut ipsum. Sed eget ullamcorper tellus. Phasellus libero ligula, rutrum nec laoreet vitae, tempor non arcu. Morbi tempor maximus libero, nec dignissim tortor placerat a. Aenean id sodales tortor, sit amet porta purus. Mauris semper eros vitae nulla condimentum consequat. Etiam dolor elit, lobortis non mauris at, ornare scelerisque eros. Suspendisse condimentum purus augue, vitae lobortis est laoreet vitae. Sed pretium quis odio sed molestie. Phasellus id condimentum arcu. Nam sed faucibus felis, eu luctus dui. Morbi ultricies nec eros vitae tempus. Donec bibendum fringilla neque rhoncus euismod."
    });
    await post4.save();

    const post5 = new Post({
        image: "https://images.unsplash.com/photo-1549987506-35e5c52b0415?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. #5",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis mi sed risus ullamcorper egestas vel ut orci. Phasellus sed sapien non odio fermentum ullamcorper rhoncus quis nisi. Morbi gravida risus velit, ut tristique diam fringilla lobortis. Nunc posuere, massa sed varius tempus, massa ex lobortis erat, eu sollicitudin nunc mi viverra leo. Suspendisse ornare congue eleifend. Fusce mattis et sapien at varius. Nulla hendrerit, tortor eget vulputate fringilla, ante lorem vehicula odio, in suscipit odio felis in nisi. Nulla imperdiet sem eu varius convallis. Duis non libero tristique, euismod magna sed, convallis metus. Mauris vel nisi ac orci eleifend accumsan et ut ipsum. Sed eget ullamcorper tellus. Phasellus libero ligula, rutrum nec laoreet vitae, tempor non arcu. Morbi tempor maximus libero, nec dignissim tortor placerat a. Aenean id sodales tortor, sit amet porta purus. Mauris semper eros vitae nulla condimentum consequat. Etiam dolor elit, lobortis non mauris at, ornare scelerisque eros. Suspendisse condimentum purus augue, vitae lobortis est laoreet vitae. Sed pretium quis odio sed molestie. Phasellus id condimentum arcu. Nam sed faucibus felis, eu luctus dui. Morbi ultricies nec eros vitae tempus. Donec bibendum fringilla neque rhoncus euismod."
    });
    await post5.save();

    const post6 = new Post({
        image: "https://images.unsplash.com/photo-1515405254580-63dfe292b1fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. #6",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis mi sed risus ullamcorper egestas vel ut orci. Phasellus sed sapien non odio fermentum ullamcorper rhoncus quis nisi. Morbi gravida risus velit, ut tristique diam fringilla lobortis. Nunc posuere, massa sed varius tempus, massa ex lobortis erat, eu sollicitudin nunc mi viverra leo. Suspendisse ornare congue eleifend. Fusce mattis et sapien at varius. Nulla hendrerit, tortor eget vulputate fringilla, ante lorem vehicula odio, in suscipit odio felis in nisi. Nulla imperdiet sem eu varius convallis. Duis non libero tristique, euismod magna sed, convallis metus. Mauris vel nisi ac orci eleifend accumsan et ut ipsum. Sed eget ullamcorper tellus. Phasellus libero ligula, rutrum nec laoreet vitae, tempor non arcu. Morbi tempor maximus libero, nec dignissim tortor placerat a. Aenean id sodales tortor, sit amet porta purus. Mauris semper eros vitae nulla condimentum consequat. Etiam dolor elit, lobortis non mauris at, ornare scelerisque eros. Suspendisse condimentum purus augue, vitae lobortis est laoreet vitae. Sed pretium quis odio sed molestie. Phasellus id condimentum arcu. Nam sed faucibus felis, eu luctus dui. Morbi ultricies nec eros vitae tempus. Donec bibendum fringilla neque rhoncus euismod."
    });
    await post6.save();

    await User.deleteMany({});
    const user = new User({email: 'admin@admin.com', username: 'admin' });
    await User.register(user, '987123');

    console.log("Seeding...");
};

seedDB().then(() => {
    mongoose.connection.close();
    console.log("Database closed");
})