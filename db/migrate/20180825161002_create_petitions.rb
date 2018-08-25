class CreatePetitions < ActiveRecord::Migration[5.1]
  def change
    create_table :petitions do |t|
      t.string :number
      t.string :petitioner
      t.string :website
      t.string :decision
      t.string :decision_date
      t.string :description
      t.string :district

      t.timestamps
    end
  end
end
