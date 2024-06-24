
<div class="min-h-screen bg-gray-900 text-gray-300">
    <div class="container mx-auto p-6 sm:p-12">
        <h1 class="text-5xl md:text-6xl font-extrabold text-white mb-6">
            Welcome to Car List
        </h1>
        <p class="text-lg md:text-xl text-white mb-6">
            Your personal space to curate and manage a wishlist of your favorite watches. 
            Sign in to create, view, edit, and delete items from your carlist.
        </p>
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col space-y-2">
            <form class=" flex flex-col space-y-5" action="?/signup" method="post">
                <h1 class=" font-extrabold">Create an Account</h1>
                <input class=" outline-none rounded-sm p-1 placeholder:text-black text-black"  type="email" name="email" placeholder="Enter your email address">
                <input class=" outline-none rounded-sm p-1 placeholder:text-black text-black"  type="password" name="password" placeholder="Enter a password">
                <button type="submit" class=" bg-green-800" >Sign-Up</button>
            </form>
            <form  class=" flex flex-col space-y-5 " action="?/login" method="post">
                <h1 class=" font-extrabold">Already have an Account?</h1>
                <input class=" outline-none rounded-sm p-1 placeholder:text-black text-black" type="email" name="email" placeholder="Enter your email address">
                <input class=" outline-none rounded-sm p-1 placeholder:text-black text-black"  type="password" name="password" placeholder="Enter your password">
                <button type="submit" class=" bg-green-800" >Login</button>
            </form>
          <div>
          </div>
        </div>
    </div>
</div>