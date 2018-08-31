require 'test_helper'

class PetitionsControllerTest < ActionDispatch::IntegrationTest
  test "should get [index]" do
    get petitions_[index]_url
    assert_response :success
  end

end
